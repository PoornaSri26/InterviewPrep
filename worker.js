export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Try to fetch from assets
    let response = await env.ASSETS.fetch(request);
    
    // If not found and it's a navigation request (not a file with extension), serve index.html for SPA
    if (response.status === 404 && !url.pathname.includes('.')) {
      const indexRequest = new Request(new URL('/index.html', request.url), request);
      response = await env.ASSETS.fetch(indexRequest);
    }
    
    return response;
  },
};