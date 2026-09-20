import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) { }

  async getProfile() {
    return await this.prisma.client.orm
      .public.Profile
      .include('skills')
      .include('experiences')
      .include('projects')
      .first();
  }

}
