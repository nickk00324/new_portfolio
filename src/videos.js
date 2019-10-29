import rasputin from './assets/videos/BMR.mp4';
import kelly_fam from './assets/videos/KFDS.mp4';
import ronnie from './assets/videos/ROSPB.mp4';
import vidas from './assets/videos/V7E.mp4';

const videos = [
    rasputin,
    kelly_fam,
    ronnie,
    vidas
];

const selectedVideo = videos[Math.floor(Math.random() * videos.length)];

export default selectedVideo;
