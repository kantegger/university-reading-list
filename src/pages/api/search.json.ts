import type { APIRoute } from 'astro';
import { getAllContent } from '../../lib/content-utils';

export const GET: APIRoute = async () => {
  try {
    // 获取所有语言的书籍内容
    const allContentByLang = await getAllContent();
    const booksEn = allContentByLang.en || [];
    const booksZhCn = allContentByLang['zh-cn'] || [];
    const booksZhTw = allContentByLang['zh-tw'] || [];
    const booksJa = allContentByLang.ja || [];

    // 合并所有语言的书籍，并添加语言标识，不进行去重
    const searchData = [
      ...booksEn.map(book => ({
        title: book.data.title,
        original_title: book.data.original_title || book.data.title,
        author: book.data.author,
        description: book.data.description,
        category: book.data.category,
        tags: book.data.tags,
        difficulty: book.data.difficulty,
        slug: book.slug,
        cover: book.data.cover,
        rating: book.data.rating,
        amazonLink: book.data.amazonLink,
        price: book.data.price,
        isbn: book.data.isbn,
        lang: 'en',
        publisher: book.data.publisher,
        year: book.data.year,
        featured: book.data.featured,
      })),
      ...booksZhCn.map(book => ({
        title: book.data.title,
        original_title: book.data.original_title || book.data.title,
        author: book.data.author,
        description: book.data.description,
        category: book.data.category,
        tags: book.data.tags,
        difficulty: book.data.difficulty,
        slug: book.slug,
        cover: book.data.cover,
        rating: book.data.rating,
        amazonLink: book.data.amazonLink,
        price: book.data.price,
        isbn: book.data.isbn,
        lang: 'zh-cn',
        publisher: book.data.publisher,
        year: book.data.year,
        featured: book.data.featured,
      })),
      ...booksZhTw.map(book => ({
        title: book.data.title,
        original_title: book.data.original_title || book.data.title,
        author: book.data.author,
        description: book.data.description,
        category: book.data.category,
        tags: book.data.tags,
        difficulty: book.data.difficulty,
        slug: book.slug,
        cover: book.data.cover,
        rating: book.data.rating,
        amazonLink: book.data.amazonLink,
        price: book.data.price,
        isbn: book.data.isbn,
        lang: 'zh-tw',
        publisher: book.data.publisher,
        year: book.data.year,
        featured: book.data.featured,
      })),
      ...booksJa.map(book => ({
        title: book.data.title,
        original_title: book.data.original_title || book.data.title,
        author: book.data.author,
        description: book.data.description,
        category: book.data.category,
        tags: book.data.tags,
        difficulty: book.data.difficulty,
        slug: book.slug,
        cover: book.data.cover,
        rating: book.data.rating,
        amazonLink: book.data.amazonLink,
        price: book.data.price,
        isbn: book.data.isbn,
        lang: 'ja',
        publisher: book.data.publisher,
        year: book.data.year,
        featured: book.data.featured,
      })),
    ];

    // 数据验证
    if (!Array.isArray(searchData) || searchData.length === 0) {
      console.warn('Search data is empty or format error');
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300', // 缩短缓存时间
        },
      });
    }

    return new Response(JSON.stringify(searchData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        'X-Total-Count': searchData.length.toString(),
        ETag: `"${Date.now()}-${searchData.length}"`,
        Vary: 'Accept-Encoding',
      },
    });
  } catch (error) {
    console.error('Search API error:', error);

    // 分类处理不同类型的错误
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const statusCode =
      errorMessage.includes('ENOENT') || errorMessage.includes('not found') ? 404 : 500;

    return new Response(
      JSON.stringify({
        error: 'Search service temporarily unavailable',
        message: 'Please try again later or contact administrator',
        timestamp: new Date().toISOString(),
        ...(process.env.NODE_ENV === 'development' && { details: errorMessage }),
      }),
      {
        status: statusCode,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        },
      }
    );
  }
};
