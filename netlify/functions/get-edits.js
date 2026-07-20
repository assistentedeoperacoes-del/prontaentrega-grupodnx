// Preencha estes dois valores depois de criar sua conta gratuita em jsonbin.io
const JSONBIN_ID = '6a5e1456da38895dfe75fe80';
const JSONBIN_KEY = '$2a$10$bUIjIiytOLKJQgcwvYAbaeDUrqAmnwHgdS/5hJy3UikBclgGZw1xG';

export const handler = async () => {
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}/latest`, {
      headers: { 'X-Master-Key': JSONBIN_KEY }
    });
    if (!res.ok) {
      const text = await res.text();
      return { statusCode: 500, body: JSON.stringify({ error: 'jsonbin_get_failed', status: res.status, detail: text }) };
    }
    const json = await res.json();
    const data = json.record || { edits: {}, manualProducts: [] };
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: String(err) }) };
  }
};
