"use client";

import { globeTexture } from "@/assets/globeTexture";
import { useLoader, Canvas } from "@react-three/fiber";
import { TextureLoader } from "three";
import { AsciiRenderer, OrbitControls } from "@react-three/drei";

export default function Globe(props: any) {
	const textureMap = useLoader(TextureLoader, globeTexture);

	return (
		<div {...props}>
			<Canvas camera={{ position: [0, 10, 15], near: 1, far: 50 }}>
				<color attach={"background"} args={["#211d1b"]} />
				<ambientLight intensity={6} />
				<mesh>
					<sphereGeometry attach="geometry" args={[7, Math.pow(2, 9), Math.pow(2, 9)]} />
					<meshStandardMaterial map={textureMap} />
				</mesh>

				<OrbitControls autoRotate enableZoom={false} enablePan={false} enableRotate={false} />
				<AsciiRenderer fgColor="0x54a839" bgColor="transparent" resolution={0.25} characters="   .:-+*=%@#" />
			</Canvas>
		</div>
	);
}
