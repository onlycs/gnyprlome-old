import MenuVis from '@services/menuvis';
import Notifications from '@barmenu/notification';

export default Widget.Window({
	visible: MenuVis.bind('barmenu'),
	name: 'barmenu',
	anchor: ['top'],
	layer: 'overlay',
	css: 'background-color: transparent',
	child: Widget.Box({
		class_name: 'BarMenuBox',
		children: [
			Notifications,
			Widget.Separator({ orientation: 1 })
		],
		spacing: 16,
	}),
});