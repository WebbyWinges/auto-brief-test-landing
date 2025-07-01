import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

// Функция для загрузки учетных данных из файла
async function getCredentials() {
  const filePath = path.join(process.cwd(), "public", "googleFile.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}

// ID вашей Google таблицы
const sheetId = "1PrNdo2tJBri3WjLNSj4_7ht0k177JeEaCxlMoeZnOLU";

// Функция для записи данных в Google таблицу
async function writeToSheet(data: any) {
  const credentials = await getCredentials();

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const date = new Date().toLocaleDateString();

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Info!A:E", // Измените название на 'List'
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[date, data.email, data.question]],
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await writeToSheet(body);
    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Error writing to Google Sheets:", error);
    return NextResponse.json({ status: "error", message: error });
  }
}
