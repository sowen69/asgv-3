import { MeshMatcapMaterial, TextureLoader } from 'three';

export default function Materials() {
  return <div>Materials</div>;
}

export function Clay(): MeshMatcapMaterial {
  const clay = new MeshMatcapMaterial();
  const clayTexture = new TextureLoader().load('/clayMatCapMat.jpg');
  clay.matcap = clayTexture;
  return clay;
}
