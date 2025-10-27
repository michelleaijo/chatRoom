using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub
{
    private static readonly Dictionary<string, HashSet<string>> RoomUsers = new();
    private static readonly Dictionary<string, string> ConnectionUserMap = new();

    public async Task SendMessage(string user, string message)
    {
        Console.WriteLine($"[SERVER] {user}: {message}");
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }

    public async Task JoinRoom(string roomName, string username)
    {
        ConnectionUserMap[Context.ConnectionId] = username;

        if (!RoomUsers.ContainsKey(roomName))
            RoomUsers[roomName] = new HashSet<string>();

        RoomUsers[roomName].Add(username);

        await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
        await Clients.Group(roomName).SendAsync("UserListUpdate", RoomUsers[roomName].ToList());
    }

    public async Task LeaveRoom(string roomName, string username)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);

        if (RoomUsers.ContainsKey(roomName))
        {
            RoomUsers[roomName].Remove(username);
            await Clients.Group(roomName).SendAsync("UserListUpdate", RoomUsers[roomName].ToList());
        }

        ConnectionUserMap.Remove(Context.ConnectionId);
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {   
        foreach (var room in RoomUsers.Keys)
        {
            if (ConnectionUserMap.TryGetValue(Context.ConnectionId, out string username))
            {
                if (RoomUsers[room].Remove(username))
                {
                    await Clients.Group(room).SendAsync("UserListUpdate", RoomUsers[room].ToList());
                }
            }
        }

        ConnectionUserMap.Remove(Context.ConnectionId);
        await base.OnDisconnectedAsync(exception);
    }
}
