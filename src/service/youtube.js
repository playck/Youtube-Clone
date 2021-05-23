class Youtube {
  constructor(key) {
    this.key = key;
  }

  async mostPopular() {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`
      );
      const result = await res.json();
      return result.items;
    } catch (err) {
      return console.log("error", err);
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`
      );
      const result = await response.json();
      const items = result.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
      return items;
    } catch (err) {
      return console.log("error", err);
    }
  }
}

export default Youtube;
