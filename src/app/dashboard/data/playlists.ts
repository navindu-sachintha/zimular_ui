export type Playlist = (typeof playlists)[number]

export const playlists = [
  "Output 01",
  "Output 02",
  "Output 03",
  "Output 04",
]

export const inputs = {
  "user_id": "test_user_id",
  "group": [
    {
      "group_id": "test_01",
      "name" : "Group_01",
      "fields": [
        {
          "id" : "in_01",
          "name" : "Input 01",
          "type": "text",
          
        }
      ]
    }
  ]

}
