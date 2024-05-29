<script lang="ts">
import type { QuickConnectorData } from '$lib/data';

export let connectorsQuickData: QuickConnectorData[] = [];
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
                {#each connectorsQuickData as connector}
                <tr>
                    <td class="p-2 whitespace-nowrap">
                      <div class="flex items-center">
                          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img class="rounded-full" src={connector.connectorImage} width="40" height="40" alt="">
                          </div>
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.series as seriesItem}
                          <div>{seriesItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.locking as lockingItem}
                          <div>{lockingItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-center">
                        {#each connector.positions as positionsItem}
                          <div>{positionsItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.voltAmpMax as voltAmpMaxItem}
                          <div>{voltAmpMaxItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.cableDiameter as cableDiameterItem}
                          <div>{cableDiameterItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.awg as awgItem}
                          <div>{awgItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.contactsDiameter as contactsDiameterItem}
                          <div>{contactsDiameterItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.material as materialItem}
                          <div>{materialItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.shield as shieldItem}
                          <div>{shieldItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.ul as ulItem}
                          <div>{ulItem}</div>
                        {/each}
                      </div>
                    </td>
                    <td class="p-2 whitespace-nowrap">
                      <div class="text-left">
                        {#each connector.links as link}
                          <div><a href={link.pageUrl} target="_blank">Page Link</a></div>
                          <div>{link.pdfRef}</div>
                        {/each}
                      </div>
                    </td>
                  </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
