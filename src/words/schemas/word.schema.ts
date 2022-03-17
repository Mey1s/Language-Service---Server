import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WordDocument = Word & Document;

@Schema({ collection: 'words' })
export class Word {
  @Prop()
  wordCode: string;

  @Prop()
  lang: string;

  @Prop()
  text: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);
