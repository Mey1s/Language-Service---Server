import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';
import { FindWordDtoResponse } from './findWordDto';

export class CreateWordDtoRequest {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  @ApiProperty()
  wordCode: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  @ApiProperty()
  lang: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  @ApiProperty()
  text: string;
}

export class CreateWordDtoResponse {
  @ApiProperty()
  _id: Types.ObjectId;

  constructor(word: Partial<FindWordDtoResponse>) {
    this._id = word._id;
  }
}
