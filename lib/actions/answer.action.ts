"use server";

import { connectToDb } from "../mongoose";

import { CreateAnswerParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Answer from "@/database/answer.model";
import Question from "@/database/question.model";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDb();

    const { content, author, question, path } = params;

    const answer = await Answer.create({
      content,
      author,
      question,
    });

    await Question.findByIdAndUpdate(question, {
      $push: { answers: answer._id },
    });

    revalidatePath(path);

    return answer;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
