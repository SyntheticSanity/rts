define(function(){
	var ui;

	ui = {
		menu: {
			current: 'none',
			next: 'main',
			transition: {
				delta: 0,
				delay: 0.2
			},
			set: function(menu) {
				ui.menu.next = menu;
			}
		},
		update: function(delta) {
			if (ui.menu.current != ui.menu.next) {
				ui.menu.transition.delta += delta;
				if (ui.menu.transition.delta > ui.menu.transition.delay) {
					ui.menu.transition.delta = 0;
					ui.menu.current = ui.menu.next;
				}

			}
		}
	};

	return ui;
});