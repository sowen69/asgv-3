/* eslint-disable no-restricted-globals */
export default function ImageWorker() {
  const ctx = self;

  ctx.addEventListener(
    'message',
    async (event): Promise<void> => {
      const urls: string[] = event.data;
      // console.log(event.data);
      const images = await Promise.all(
        urls.map(async (url: string) => {
          try {
            const response = await fetch(url);
            const fileBlob = await response.blob();
            if (fileBlob.type === 'image/jpeg')
              return URL.createObjectURL(fileBlob);
          } catch (error) {
            return null;
          }
          return null;
        })
      );
      ctx.postMessage(images);
    },
    false
  );
}
