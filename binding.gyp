{
  "targets": [
    {
      "target_name": "factorial",
      "sources": [ "src/factorial/factorial.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
