import { Box } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { MessageCard } from './Message';

const now = new Date();

export const Messages = () => {
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    listRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Box h="100%" py={8}>
      <MessageCard
        message="Good Customer Service"
        timeStamp="2023-08-12T00:01:32.011Z"
      />
      <MessageCard
        message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, ipsa voluptatibus. Beatae, odit, et eum molestiae quisquam at delectus quia inventore voluptas est, incidunt ratione soluta rerum rem officia quo!"
        timeStamp="2023-08-12T00:01:32.011Z"
      />
      <MessageCard
        message="Thanks for your Kind Feedbacks"
        timeStamp="2023-08-12T00:01:32.011Z"
        isOwnMessage={true}
      />

      <MessageCard
        message="Good Customer Service"
        timeStamp={'2023-08-12T00:01:32.011Z'}
      />

      <div ref={listRef} />
    </Box>
  );
};
