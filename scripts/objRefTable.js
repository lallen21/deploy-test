const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.destroy,
		C3.Behaviors.Physics,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Platform.Acts.SetIgnoreInput
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Sprite: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Keyboard: 0},
	{spikes: 0},
	{wall: 0},
	{plat1: 0},
	{Door: 0},
	{DestroyOutsideLayout: 0},
	{Physics: 0},
	{Sprite3: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	spikes: class extends self.ITiledBackgroundInstance {},
	wall: class extends self.ITiledBackgroundInstance {},
	plat1: class extends self.ITiledBackgroundInstance {},
	Door: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {}
}