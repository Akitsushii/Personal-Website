<script lang="ts">
	import { STATUS } from "$lib/types";

	let { status }: { status: STATUS } = $props();
</script>

<span
	class="shrink-0 rounded-sm px-2 py-0.5 text-xs font-bold"
	class:bg-fg={status === STATUS.DONE}
	class:text-bg={status === STATUS.DONE}
	class:bg-bg-2={status === STATUS.DOING}
	class:text-accent-2={status === STATUS.DOING}
	class:border={status === STATUS.DRAFT}
	class:border-bg-2={status === STATUS.DRAFT}
	class:text-muted={status === STATUS.DRAFT}
>
	{STATUS[status]}
</span>