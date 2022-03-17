import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateWordDtoRequest,
  CreateWordDtoResponse,
} from './dtos/createWordDto';
import { FindWordDtoRequest, FindWordDtoResponse } from './dtos/findWordDto';
import { WordsService } from './words.service';

@ApiTags('Words')
@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @ApiResponse({ status: 200, type: FindWordDtoResponse })
  @Get('/get')
  async getWord(
    @Query() word: FindWordDtoRequest,
  ): Promise<FindWordDtoResponse> {
    word.lang = word.lang.toLowerCase();
    return this.wordsService.findOne(word);
  }

  @ApiResponse({ status: 200, type: CreateWordDtoResponse })
  @Post('/create')
  async createWord(
    @Body() word: CreateWordDtoRequest,
  ): Promise<CreateWordDtoResponse> {
    word.lang = word.lang.toLowerCase();
    return this.wordsService.create(word);
  }
}
