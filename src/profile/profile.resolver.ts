import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProfileService } from './profile.service.js';
import { Profile } from './entities/profile.entity.js';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) { }

  @Query(() => Profile)
  profile() {
    return this.profileService.getProfile();
  }

}
