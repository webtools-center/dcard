import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsISO8601 } from 'class-validator';

@ObjectType()
export class Experience {
  @Field(() => ID)
  id: string;

  @Field()
  company: string;

  @Field()
  position: string;

  @Field()
  startDate: string;

  @Field({ nullable: true })
  endDate?: string;

  @Field(() => [String])
  achievements: string[];
}
