<script lang="ts">
import type { QuickConnectorData } from '$lib/data';

export let data: QuickConnectorData[] = [];

export let titles: string[] = [];

</script>

<div class="p-3">
    <div class="overflow-x-auto">
        <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  {#each titles as title}
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">{title}</div>
                    </th>
                  {/each}
                </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100">
                {#each data as connector}
                <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                          <div class="w-[150px]  flex-shrink-0 mr-2 sm:mr-3">
                            <img class="rounded-full" src={connector.connectorImage} alt="">
                          </div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.series as seriesItem}
                          <div class="pt-[5px]">{seriesItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.locking as lockingItem}
                          <div class="pt-[5px]">{lockingItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-center">
                        {#each connector.positions as positionsItem}
                          <div class="pt-[5px]">{positionsItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.voltAmpMax as voltAmpMaxItem}
                          <div class="pt-[5px]">{voltAmpMaxItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.cableDiameter as cableDiameterItem}
                          <div class="pt-[5px]">{cableDiameterItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.awg as awgItem}
                          <div class="pt-[5px]">{awgItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.contactsDiameter as contactsDiameterItem}
                          <div class="pt-[5px]">{contactsDiameterItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.material as materialItem}
                          <div class="pt-[5px]">{materialItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.shield as shieldItem}
                          <div class="pt-[5px]">{shieldItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.ul as ulItem}
                          <div class="pt-[5px]">{ulItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.links as link}
                          <div><a href={link.pageUrl} target="_blank">Page Link</a></div>
                          <div>PDF Ref: {link.pdfRef}</div>
                        {/each}
                      </div>
                    </td>
                  </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
