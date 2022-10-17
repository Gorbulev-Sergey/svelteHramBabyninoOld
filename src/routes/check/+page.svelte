<script>
	import ComponentFildDate from '../schedule/ComponentFildDate.svelte';
	import ComponentMonth from '../schedule/ComponentMonth.svelte';
	import FildDate from '../schedule/FildDate';
	import FildTime from '../schedule/FildTime';
	import Month from '../schedule/Month';

	let filds = new Array();
	class Fild {
		_dayOfWeek(day = 1) {
			switch (day) {
				case 0:
					return 'воскресенье';
				case 1:
					return 'понедельник';
				case 2:
					return 'вторник';
				case 3:
					return 'среда';
				case 4:
					return 'четверг';
				case 5:
					return 'пятница';
				case 6:
					return 'суббота';
			}
		}
		constructor(fullDate = new Date(), event = '', prayer = new Array()) {
			this.fullDate = fullDate;
			this.date = this.fullDate.toLocaleDateString();
			this.event = event;
			this.time = this.fullDate.toLocaleTimeString();
			this.prayer = prayer;
			this.dayOfWeek = this._dayOfWeek(fullDate.getDay());
		}
	}
	let fild = new Fild(new Date(2022, 10, 15));
</script>

<h4>Добавить</h4>
<div class="d-flex align-items-start my-3">
	<div class="btn btn-light me-1 rounded-0 rounded-left">{fild.date}</div>
	<div class="flex-grow-1">
		<div class="d-flex align-items-start mb-1">
			<button
				class="btn btn-light me-1 rounded-0"
				on:click={() => {
					filds = [...filds, fild].sort((prev, next) => {
						if (prev.fullDate < next.fullDate) return -1;
						if (prev.fullDate < next.fullDate) return 1;
					});
					console.log(filds);
					fild = new Fild();
				}}
			>
				<i class="fa-solid fa-circle-plus" />
			</button>
			<div class="flex-grow-1 me-1">
				<input class="form-control rounded-0" bind:value={fild.event} />
			</div>
			<div class="me-1">
				<input type="time" class="form-control rounded-0" bind:value={fild.time} />
			</div>
			<div>
				<input class="form-control rounded-0" bind:value={fild.prayer} />
			</div>
		</div>
	</div>
</div>

<h4>Расписание</h4>
{#each filds as fild}
	<div
		class="d-flex align-items-start border mb-3 {fild.dayOfWeek == 'воскресенье'
			? 'bg-dark text-light border-dark'
			: ''}"
	>
		<div class="text-center p-1 me-1" style="width: 8em;">{fild.date}<br />{fild.dayOfWeek}</div>
		<div class="flex-grow-1">
			<div class="d-flex align-items-start mb-1">
				<div class="flex-grow-1 p-1 me-1">{fild.event}</div>
				<div class="text-right p-1 me-1">{fild.time}</div>
				<div class="p-1" style="width: 14em;">{fild.prayer}</div>
			</div>
		</div>
	</div>
{/each}

<div class="border rounded">
	<div style="display: grid; grid-template-columns: .14fr 1fr">
		<div class="text-center px-3 py-2" style="min-width: 8em;">
			6 мая<br /><i>воскресенье</i>
		</div>
		<div>
			<div style="display: grid; grid-template-columns: 1fr .11fr .3fr">
				<div class="px-3 py-2">Великомученика Георгия Победоносца</div>
				<div class="text-end px-3 py-2">10:00</div>
				<div class="px-3 py-2">Молебен с акафистом</div>
			</div>
			<div style="display: grid; grid-template-columns: 1fr .11fr .3fr">
				<div class="px-3 py-2">Великомученика Георгия Победоносца</div>
				<div class="text-end px-3 py-2">16:30</div>
				<div class="px-3 py-2">Всенощное бдение</div>
			</div>
		</div>
	</div>
</div>

<ComponentMonth month={new Month(10, 2022)} />
