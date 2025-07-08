import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsInt,
  Min,
  IsOptional,
} from 'class-validator';
import { isStringObject } from 'util/types';

export class CreateItemDto {
  @IsString() //文字列であることを確認する
  @IsNotEmpty() //一文字以上であることを確認する
  @MaxLength(40) //40字以内であることを確認する
  name: string;

  @IsInt() //整数であることを確認する
  @Min(1) //最小値を設定する
  price: number;

  @IsOptional() //オプションであることを確認する Nullであるなら以下のIsStringやMaxLengthは無視する
  @IsString() //文字列であることを確認する　値があることを確認する
  @MaxLength(1000) //1000字以内であることを確認する
  description?: string;
}

//UUIDを使用する
