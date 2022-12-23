<script>
	export let _class = '';
	let isCodeShow = false;
	export let codeOnClick = () => {};
</script>

<div class={_class}>
	{#if !isCodeShow}
		<!--Отменить, Повторить-->
		<div class="btn-group btn-group-sm me-1">
			<button
				class="btn btn-primary text-dark"
				title="Отменить"
				on:click={() => document.execCommand('undo')}><i class="fas fa-undo" /></button
			>
			<button
				class="btn btn-primary text-dark"
				title="Повторить"
				on:click={() => document.execCommand('redo')}><i class="fas fa-redo" /></button
			>
		</div>
		<!--Стили-->
		<div class="btn-group btn-group-sm me-1">
			<div class="dropdown d-inline">
				<button
					class="btn btn-sm btn-primary text-dark dropdown-toggle"
					data-bs-toggle="dropdown"
					title="Стиль текста"
				>
					Обычный
				</button>
				<div class="dropdown-menu">
					<button
						class="dropdown-item"
						on:click={() => document.execCommand('formatBlock', false, 'P')}>Обычный</button
					>
					<button
						class="dropdown-item"
						on:click={() => document.execCommand('formatBlock', false, 'H1')}
						><h1>Заголовок 1</h1></button
					>
					<button
						class="dropdown-item"
						on:click={() => document.execCommand('formatBlock', false, 'H2')}
						><h2>Заголовок 2</h2></button
					>
					<button
						class="dropdown-item"
						on:click={() => document.execCommand('formatBlock', false, 'H3')}
						><h3>Заголовок 3</h3></button
					>
					<button
						class="dropdown-item"
						on:click={() => document.execCommand('formatBlock', false, 'H4')}
						><h4>Заголовок 4</h4></button
					>
					<button
						class="dropdown-item"
						on:click={() => document.execCommand('formatBlock', false, 'H5')}
						><h5>Заголовок 5</h5></button
					>
					<button
						class="dropdown-item"
						on:click={() => document.execCommand('formatBlock', false, 'H6')}
						><h6>Заголовок 6</h6></button
					>
				</div>
			</div>
		</div>
		<!--Названия шрифтов-->
		<div class="btn-group btn-group-sm me-1">
			<div class="dropdown d-inline">
				<button
					class="btn btn-sm btn-primary text-dark dropdown-toggle"
					data-bs-toggle="dropdown"
					title="Название шрифта"
				>
					Segoe UI
				</button>
				<div class="dropdown-menu">
					<button
						class="dropdown-item"
						style="font-family:Arial"
						on:click={() => document.execCommand('fontName', false, 'Arial')}>Arial</button
					>
					<button
						class="dropdown-item"
						style="font-family:Consolas"
						on:click={() => document.execCommand('fontName', false, 'Consolas')}>Consolas</button
					>
					<button
						class="dropdown-item"
						style="font-family:'Roboto'"
						on:click={() => document.execCommand('fontName', false, 'Roboto')}>Roboto</button
					>
					<button
						class="dropdown-item"
						style="font-family:'Segoe UI'"
						on:click={() => document.execCommand('fontName', false, 'Segoe UI')}>Segoe UI</button
					>
					<button
						class="dropdown-item"
						style="font-family:'Times New Roman'"
						on:click={() => document.execCommand('fontName', false, 'Times New Roman')}
						>Times N.R.</button
					>
				</div>
			</div>
		</div>
		<!--Размер шрифтов-->
		<div class="btn-group btn-group-sm me-1">
			<div class="dropdown d-inline">
				<button
					class="btn btn-sm btn-primary text-dark dropdown-toggle"
					data-bs-toggle="dropdown"
					title="Размер шрифта"
				>
					14 pt
				</button>
				<div class="dropdown-menu">
					<button class="dropdown-item" on:click={() => document.execCommand('fontSize', false, 1)}
						>10 pt</button
					>
					<button class="dropdown-item" on:click={() => document.execCommand('fontSize', false, 2)}
						>12 pt</button
					>
					<button class="dropdown-item" on:click={() => document.execCommand('fontSize', false, 3)}
						>14 pt</button
					>
					<button class="dropdown-item" on:click={() => document.execCommand('fontSize', false, 4)}
						>16 pt</button
					>
					<button class="dropdown-item" on:click={() => document.execCommand('fontSize', false, 5)}
						>18 pt</button
					>
					<button class="dropdown-item" on:click={() => document.execCommand('fontSize', false, 6)}
						>22 pt</button
					>
					<button class="dropdown-item" on:click={() => document.execCommand('fontSize', false, 7)}
						>24 pt</button
					>
				</div>
			</div>
		</div>
		<!--Жирный, курсив, подчёркнутый-->
		<div class="btn-group btn-group-sm me-1">
			<button
				class="btn btn-primary text-dark"
				title="Жирный"
				on:click={() => document.execCommand('bold')}><i class="fas fa-bold" /></button
			>
			<button
				class="btn btn-primary text-dark"
				title="Курсив"
				on:click={() => document.execCommand('italic')}><i class="fas fa-italic" /></button
			>
			<button
				class="btn btn-primary text-dark"
				title="Подчёркнутый"
				on:click={() => document.execCommand('underline')}><i class="fas fa-underline" /></button
			>
		</div>
		<!--Выравнивание текста-->
		<div class="btn-group btn-group-sm me-1" data-bs-toggle="buttons">
			<label class="btn btn-primary text-dark active" title="Слева">
				<input
					type="radio"
					name="options"
					id="option1"
					autocomplete="off"
					checked
					on:click={() => document.execCommand('justifyLeft')}
				/>
				<i class="fas fa-align-left" />
			</label>
			<label class="btn btn-primary text-dark" title="По центру">
				<input
					type="radio"
					name="options"
					id="option2"
					autocomplete="off"
					on:click={() => document.execCommand('justifyCenter')}
				/>
				<i class="fas fa-align-center" />
			</label>
			<label class="btn btn-primary text-dark" title="Справа">
				<input
					type="radio"
					name="options"
					id="option3"
					autocomplete="off"
					on:click={() => document.execCommand('justifyRight')}
				/>
				<i class="fas fa-align-right" />
			</label>
			<label class="btn btn-primary text-dark" title="По ширине">
				<input
					type="radio"
					name="options"
					id="option4"
					autocomplete="off"
					on:click={() => document.execCommand('justifyFull')}
				/>
				<i class="fas fa-align-justify" />
			</label>
		</div>
		<!--Списки-->
		<div class="btn-group btn-group-sm me-1">
			<button
				class="btn btn-primary text-dark"
				on:click={() => document.execCommand('insertOrderedList')}
				><i class="fas fa-list-ol" /></button
			>
			<button
				class="btn btn-primary text-dark"
				on:click={() => document.execCommand('insertUnorderedList')}
				><i class="fas fa-list-ul" /></button
			>
		</div>
	{/if}

	<div class="btn-group btn-group-sm">
		<button
			class="btn btn-primary text-dark"
			title={isCodeShow ? 'Скрыть код' : 'Показать код'}
			on:click={() => {
				codeOnClick();
				isCodeShow = !isCodeShow;
			}}
			>{#if isCodeShow}
				<i class="fa-regular fa-file-lines" />
			{:else}
				<i class="fa-solid fa-code" />
			{/if}
		</button>
	</div>
</div>
