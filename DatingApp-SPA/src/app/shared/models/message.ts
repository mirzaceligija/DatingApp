export interface Message {
    id: number;
    senderId: number;
    senderNickname: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientNickname: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
