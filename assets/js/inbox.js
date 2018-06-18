let contactUsers = [
    {
        name: 'Saifur Rahman',
        avatar: 'http://via.placeholder.com/50x50',
        last_message_time: '1 min ago',
        last_message: 'Last Message goes here...'
    },
    {
        name: 'Rezwana Nitu',
        avatar: 'http://via.placeholder.com/50x50',
        last_message_time: '3 min ago',
        last_message: 'Last Message goes here...'
    }
];

var InboxApp = new Vue({
    el: '#inbox',
    data: {
        
        isActive: true,
        contactUsers: contactUsers,
        search: '',

    },
    methods:{

        // Toggle the search form
        toggleActiveClass() { this.isActive = !this.isActive; },

        // Show Message History for the selected user
        showMessageHistory(userKey)
        {
            alert(contactUsers[userKey].name);
        }
    }
});