'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '@/amplify/data/resource';

// const uuid = () => {
//   return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function () {
//     return Math.floor(Math.random() * 16).toString(16);
//   });
// };

export default function Home() {
  Amplify.configure();
  
  // TODO 1.　Todoモデルにデータ登録
  // TODO 2. Todoモデルを一覧表示
  // TODO 3. build エラー解消?
  const client = generateClient<Schema>();


  const addTodo = () => {
    alert('addTodo');
    (async () => {
      const res = await client.models.Todo.create({
        content: 'Todo content',
        tag: 'tag1',
        deleteFlg: false,
      });
      console.log('create result', res);
    })();
  };

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <button onClick={() => addTodo()}>add TODO</button>
      </div>

      <div className={styles.description}>
        <p>
          Get started by editing HOGEHOGEHOGE&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        <span>+</span>
        <Image
          src='/amplify.svg'
          alt='Amplify Logo'
          width={45}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href='https://docs.amplify.aws/gen2/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Review documentation for Amplify's code-first DX (Gen 2).</p>
        </a>

        <a
          href='https://docs.amplify.aws/gen2/start/quickstart/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Quickstart <span>-&gt;</span>
          </h2>
          <p>Follow a tutorial to build a fullstack app with Amplify Gen 2.</p>
        </a>

        <a
          href='https://docs.amplify.aws/gen2/build-a-backend/auth/set-up-auth/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Auth <span>-&gt;</span>
          </h2>
          <p>Zero-config Auth UI components with social sign-in and MFA.</p>
        </a>

        <a
          href='https://docs.amplify.aws/gen2/build-a-backend/data/set-up-data/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Data <span>-&gt;</span>
          </h2>
          <p>Fully-typed real-time API with NoSQL database.</p>
        </a>
      </div>
    </main>
  );
}
