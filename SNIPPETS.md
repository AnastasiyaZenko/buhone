# snippets

### jade / pug

```json
{
    "New block": {
        "prefix": "nb",
        "body": [
            "mixin ${TM_FILENAME_BASE}(obj = {})",
            "\t-",
            "\t\tobj = {",
            "\t\t\ttag: '${1:section}',",
            "\t\t\t...obj",
            "\t\t}",
            "\t#{obj.tag}.${TM_FILENAME_BASE}&attributes(attributes)",
        ],
        "description": "Create a template for a new pug mixin/block"
    }
}
```

### sass

```json
{
    "Hover Media": {
        "prefix": "hm",
        "body": ["&:hover", "\t@media (min-width: $$sm)", "\t\t$1"],
        "description": "Create a hover with a media query"
    },
    "Transition": {
        "prefix": "t",
        "body": ["transition: .3s ease-in-out", "transition-property: $1"],
        "description": "Create a transition"
    },
    "Not Last Child": {
        "prefix": "nlc",
        "body": ["&:not(:last-child)", "\t$1"],
        "description": "Not Last Child"
    },
    "Not First Child": {
        "prefix": "nfc",
        "body": ["&:not(:first-child)", "\t$1"],
        "description": "Not First Child"
    }
}
```

### JavaScript

```json
{
    "Class": {
        "prefix": "cc",
        "body": [
            "class $1 {",
            "\tconstructor($$wrapper, param) {",
            "\t\tthis.$$wrapper = $$wrapper",
            "\t\tthis.param = {... {",
            "\t\t\t",
            "\t\t\t},",
            "\t\t\t...param",
            "\t\t}",
            "\t\t",
            "\t\ttry {",
            "\t\t",
            "\t\t} catch (error) {",
            "\t\t\tthrow new Error(error)",
            "\t\t}",
            "\t}",
            "}"
        ],
        "description": "Create a class by NF"
    }
}
```

### svelte

```json
{
    "New component": {
        "prefix": "s-new-component",
        "body": [
            "<script lang='ts'>",
            "\tlet className:string = ''",
            "\texport { className as class }",
            "\t",
            "</script>",
            "",
            "<template lang='pug'>",
            "\t.${TM_FILENAME_BASE}(",
            "\t\tclass='{className}'",
            "\t)",
            "</template>",
            "",
            "<!-- svelte-ignore css-unused-selector -->",
            "<style lang='sass'>",
            "\t.${TM_FILENAME_BASE}",
            "</style>",
        ],
        "description": "Create a template for a new svelte component"
    }
}
```
