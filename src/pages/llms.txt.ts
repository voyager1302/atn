import type { APIRoute } from 'astro';
import { SITE_URL } from '../lib/config/urls';
import { PHONE_DISPLAY, WHATSAPP_DISPLAY } from '../lib/config/contact';

// Served at /llms.txt. Phone numbers come from the contact config —
// never write digits here.
const body = `# ATN

ATN בונה דפי נחיתה בעברית לעסקים בישראל, בגישה של יצירת
אינטראקציה: הדף מגיב למשתמש ומוביל אותו לפעולה, במקום להציג
מידע בלבד.

## מה השירות כולל

- אפיון ובניית דף נחיתה ממוקד המרה בעברית (RTL)
- תהליך אינטראקטיבי בדף שמערב את המבקר ומוביל לפנייה
- התאמת התוכן כך שיופיע גם בתוצאות של מנועי חיפוש וגם
  בתשובות של כלי בינה מלאכותית
- ליווי אחרי ההשקה עד לתוצאות

## למי זה מיועד

בעלי עסקים בישראל שמפרסמים ומקבלים תנועה לדף, אך מעט פניות.

## יצירת קשר

וואטסאפ: ${WHATSAPP_DISPLAY}
טלפון: ${PHONE_DISPLAY}
אתר: ${SITE_URL}

## עמודים באתר

- ${SITE_URL}/ - דף הבית
- ${SITE_URL}/services/ - השירותים
- ${SITE_URL}/how-it-works/ - איך זה עובד
- ${SITE_URL}/about/ - אודות
- ${SITE_URL}/contact/ - יצירת קשר
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
