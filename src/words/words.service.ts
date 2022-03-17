import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';
import {
  CreateWordDtoRequest,
  CreateWordDtoResponse,
} from './dtos/createWordDto';
import { FindWordDtoRequest, FindWordDtoResponse } from './dtos/findWordDto';
import { Word, WordDocument } from './schemas/word.schema';

@Injectable()
export class WordsService {
  constructor(@InjectModel(Word.name) private wordModel: Model<WordDocument>) {}

  async findOne(
    wordFilterQuery: FilterQuery<FindWordDtoRequest>,
  ): Promise<FindWordDtoResponse> {
    const word = await this.wordModel.findOne(wordFilterQuery);
    if (!word) {
      throw new HttpException('Word was not found.', HttpStatus.NOT_FOUND);
    }
    return new FindWordDtoResponse(word);
  }

  async create(word: CreateWordDtoRequest): Promise<CreateWordDtoResponse> {
    if (word.lang.toLowerCase() !== 'english') {
      const findEnglishValue = await this.findOne({
        wordCode: word.wordCode,
        lang: 'English',
      });
      if (!findEnglishValue) {
        throw new HttpException(
          'If the word is not in English, you must verify there is an English value for it before entering it.',
          HttpStatus.FORBIDDEN,
        );
      }
    }
    const newWord = new this.wordModel(word);
    newWord.save();
    return new CreateWordDtoResponse(newWord);
  }
}
