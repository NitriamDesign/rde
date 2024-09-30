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
  
    <div><a href={`mailto:${employee.email}`} class="no-underline text-inherit hover:text-m-primary">
        {employee.email}
      </a></div>

</div>

