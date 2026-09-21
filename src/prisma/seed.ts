import { db } from './db.js';

async function main() {
  await db.orm.public.Project.where({}).deleteAll();
  await db.orm.public.Experience.where({}).deleteAll();
  await db.orm.public.Skill.where({}).deleteAll();
  await db.orm.public.Profile.where({}).deleteAll();

  const profile = await db.orm.public.Profile.create({
    name: "Алексей Морозов",
    description: 'Программист. Трудяга и умница :)',
    socialLinks: ['https://t.me/tavsiup', 'https://vk.ru/luarussia'],
  });

  await db.orm.public.Skill.createAll([
    { name: 'TypeScript', category: 'Backend', profileId: profile.id },
    { name: 'Node.js', category: 'Backend', profileId: profile.id },
    { name: 'NestJS', category: 'Backend', profileId: profile.id },
    { name: 'GraphQL', category: 'Backend', profileId: profile.id },
    { name: 'Prisma', category: 'Database', profileId: profile.id },
    { name: 'PostgreSQL', category: 'Database', profileId: profile.id },
    { name: 'Docker', category: 'DevOps', profileId: profile.id },
    { name: 'Git', category: 'DevOps', profileId: profile.id }
  ]);

  await db.orm.public.Experience.createAll([
    {
      company: 'Research & Engineering LTD',
      position: 'Engineer',
      startDate: '2023-01-01 01:00:00+05',
      achievements: [
        'Проектирование и генерация отказоустойчивых бэкенд-архитектур на NestJS, Prisma и GraphQL.',
        'Оптимизация реляционных схем БД и построение высоконагруженных API.',
        'Автоматизация систем CI/CD и контейнеризация приложений.'
      ],
      profileId: profile.id
    },
  ]);

  await db.orm.public.Project.createAll([
    {
      name: 'Digital Card API (DCard)',
      description: 'GraphQL API на NestJS, Prisma и Docker для презентации профиля.',
      url: 'https://github.com/webtools.center/dcard',
      profileId: profile.id
    },
  ]);

  console.log('Database successfully seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.close();
  });
