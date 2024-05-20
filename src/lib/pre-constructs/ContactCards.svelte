<script lang="ts">
    import type { Employee } from '$lib/data'

    export let employee:Employee;
</script>

<div class="flex flex-col gap-2 border-2 p-4 rounded-lg shadow w-full">
    <div class="text-m-primary font-bold text-xl">
        {employee.role}
    </div>

    <div class="text-m-secondary font-semibold">
        {employee.departments}
    </div>

    <div>
        {employee.name}
    </div>

    {#if employee.imageEmail}
        <div><img src={employee.imageEmail} alt={employee.name} class="h-[14px] mt-2"></div>
    {:else}
        <div>{employee.email}</div>
    {/if}
</div>

