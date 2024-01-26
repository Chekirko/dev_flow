"use server";

import { connectToDb } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDb();
  } catch (error) {}
}
