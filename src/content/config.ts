import { defineCollection } from 'astro:content';
import { bookSchema } from '../lib/book-schema';

// 创建一个通用的 collection 定义函数
const createCollection = () =>
  defineCollection({
    type: 'content',
    schema: bookSchema,
  });

// 定义所有语言和学科的组合
const languages = ['en', 'zh-cn', 'zh-tw', 'ja'];
const subjects = [
  'anthropology',
  'biology',
  'biomedical-engineering',
  'business',
  'chemistry',
  'computer-science',
  'economics',
  'education',
  'engineering',
  'geography',
  'history',
  'law',
  'linguistics',
  'literature',
  'mathematics',
  'medicine',
  'philosophy',
  'physics',
  'political-science',
  'psychology',
  'sociology',
];

// 动态生成所有内容集合
const collections: Record<string, ReturnType<typeof createCollection>> = {};

for (const lang of languages) {
  for (const subject of subjects) {
    const collectionName = `${subject}-${lang}`;
    collections[collectionName] = createCollection();
  }
}

export { collections };
