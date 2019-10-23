import { feed } from '../songs/playlist.json';

class AudioService {
  getAttributePodcast(id) {
    // eslint-disable-next-line
    const dataItem = feed.filter(item => {
      if (item.id === id) {
        return item;
      }
    })

    return Promise.resolve(...dataItem);
  }
}

export default AudioService;