import Config from '../constants/config';

const { API } = Config;

export function secureGet(path) {
  return fetch(`${API}/${path}`).then((res) => {
    return res.json();
  });
}
