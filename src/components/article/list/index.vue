<template>
    <table class="articles">
        <thead class="articles__head">
            <tr>
                <th v-for="c in iColumns" :key="c">{{c}}</th>
            </tr>
        </thead>

        <tbody class="articles__body">
            <tr class="body__row" v-for="(r, i) in rows" :key="i">
                <td class="body__cell" v-for="c in columns" :key="`${i}_${c}`">
                    {{r[c]}}
                </td>
            </tr>
        </tbody>

        <tfooter class="articles__footer">
            
        </tfooter>
    </table>
</template>

<script>
export default {
    name: 'ArticlesList',

    props: {
        columns: [],
        rows: [],
    },

    computed: {
        iColumns() {
            let c = Array.concat(this.columns, ['id', 'Titre'])
            return c;
        },
    }
}
</script>