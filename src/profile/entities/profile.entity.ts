import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Skill } from './skill.entity.js';
import { Experience } from './experience.entity.js';
import { Project } from './project.entity.js';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String])
  socialLinks: string[];

  @Field(() => [Skill])
  skills: Skill[];

  @Field(() => [Experience])
  experiences: Experience[];

  @Field(() => [Project])
  projects: Project[];
}