<script lang="ts">
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
    import { } from "flowbite-svelte-icons";
    import ContactCards from './ContactCards.svelte';
    import { employees } from '$lib/data'

    let isTable = false;
</script>

<div class="max-w-6xl  m-auto mt-20">

    <div class="relative h-16">
        <Button color="alternative" class="absolute right-0 m-2" on:click={() => isTable = !isTable}>
            Go To {isTable ? "Grid" : "Table"}
        </Button>
    </div>

    {#if isTable}
        <Table class="border-2">
            <TableHead>
                <TableHeadCell>Role</TableHeadCell>
                <TableHeadCell>Department</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each employees as {name, role, departments, email}}
                    <TableBodyRow>
                        <TableBodyCell>{role}</TableBodyCell>
                        <TableBodyCell>{departments}</TableBodyCell>
                        <TableBodyCell>{name}</TableBodyCell>
                        <TableBodyCell>{email}</TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    {:else}
        <div class="flex flex-wrap gap-8">
            {#each employees as employee}
                <ContactCards {employee}/>
            {/each}
        </div>
    {/if}
</div>