import MenuVis from '@services/menuvis';
import Interactable from '@components/interactable';

import { Moment } from '@variables';

export default Interactable({
	child: Widget.Box({
		children: [
			Widget.Label({
				label: Moment.Date.bind(),
				class_name: 'TextMain TextLarge DateTime',
				hexpand: true,
				xalign: 1,
			}),
			Widget.Label({
				label: ' — ',
				class_name: 'TextMain TextLarge DateTime',
			}),
			Widget.Label({
				label: Moment.Time.bind(),
				class_name: 'TextMain TextLarge DateTime',
				hexpand: true,
				xalign: 0,
			}),
		],
		spacing: 4,
		class_name: 'BarElement DateTimeBox',
	}),
	on_primary_click_release: () => { MenuVis.set('barmenu'); },
});
