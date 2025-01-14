---
sidebar_position: 3
---

# Notify

`re_data notify` command is used to send notifications relating to re_data alerts.

### slack
```bash
re_data notify slack \
--start-date 2021-01-01 \
--end-date 2021-01-31 \
--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \
--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated"
```

Running this command would generate a slack message from the alerts re_data detected.

Supported arguments:
- start-date (default: today - 7 days) - start date of the period for which you want to generate alerts
- end-date (default: today - 7 days) - end date of the period for which you want to generate alerts
- webhook-url - [incoming webhook](https://api.slack.com/messaging/webhooks) gotten from a slack app.
- subtitle (optional) - extra markdown text passed to the generated message. Often used to add some more context to the message generated.