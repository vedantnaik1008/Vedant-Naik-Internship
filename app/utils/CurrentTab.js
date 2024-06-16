export function getCurrentTabMessage(curtab) {
    if (curtab === 'report issue') {
        return `Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!`;
    } else if (curtab === 'share feedback') {
        return 'Thanks for your valuable feedback!';
    } else if (curtab === 'give suggestion') {
        return 'Thanks for your valuable Suggestion!';
    } else if (curtab === 'contact us') {
        return 'Thanks for reaching out to us! We will get back to you as soon as possible';
    }
}
