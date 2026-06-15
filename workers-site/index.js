import { getAssetFromKV, serveSinglePageApp } from '@cloudflare/kv-asset-handler';

/**
 * The mapOptions callback allows us to customize the asset matching behavior.
 * serveSinglePageApp is a helper that serves index.html for unknown routes.
 */
const handleEvent = async (event) => {
  const options = {
    mapRequestToAsset: serveSinglePageApp,
  };

  try {
    return await getAssetFromKV(event, options);
  } catch (e) {
    let pathname = new URL(event.request.url).pathname;
    return new Response(`"${pathname}" not found`, {
      status: 404,
      statusText: 'not found',
    });
  }
};

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});
