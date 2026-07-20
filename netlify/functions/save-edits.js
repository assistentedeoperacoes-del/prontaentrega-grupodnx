// Preencha estes dois valores depois de criar sua conta gratuita em jsonbin.io
const JSONBIN_ID = '6a5e1456da38895dfe75fe80';
const JSONBIN_KEY = '$2a$10$bUIjIiytOLKJQgcwvYAbaeDUrqAmnwHgdS/5hJy3UikBclgGZw1xG';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }
  try {
    const body = JSON.parse(event.body || '{}');
    const payload = {
      edits: body.edits || {},
      manualProducts: body.manualProducts || []
    };
    const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_KEY,
        'X-Bin-Versioning': 'false'
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const text = await res.text();
      return { statusCode: 500, body: JSON.stringify({ error: 'jsonbin_put_failed', status: res.status, detail: text }) };
    }
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: String(err) }) };
  }
};
