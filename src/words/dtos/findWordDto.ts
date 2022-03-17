import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Types } from 'mongoose';

export class FindWordDtoRequest {
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
}

export class FindWordDtoResponse {
  @ApiProperty()
  _id: Types.ObjectId;

  @ApiProperty()
  wordCode: string;

  @ApiProperty()
  lang: string;

  @ApiProperty()
  text: string;

  constructor(word: FindWordDtoResponse) {
    this._id = word._id;
    this.wordCode = word.wordCode;
    this.lang = word.lang;
    this.text = word.text;
  }
}
