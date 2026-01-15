import React, { useState, useEffect } from 'react';
import './DiscordStatus.css';

function DiscordStatus({ discordUserId }) {
  const [status, setStatus] = useState('offline');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!discordUserId) {
      setLoading(false);
      return;
    }

    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
        const data = await response.json();
        
        console.log('Discord status response:', data);
        
        if (data.success && data.data) {
          const newStatus = data.data.discord_status || 'offline';
          setStatus(newStatus);
          console.log('Discord status updated to:', newStatus);
        } else {
          console.warn('Lanyard API returned unsuccessful response:', data);
          setStatus('offline');
        }
      } catch (error) {
        console.error('Error fetching Discord status:', error);
        setStatus('offline');
      } finally {
        setLoading(false);
      }
    };

    // Fetch immediately
    fetchStatus();
    // Poll every 10 seconds to update status more frequently
    const interval = setInterval(fetchStatus, 10000);

    return () => clearInterval(interval);
  }, [discordUserId]);

  if (!discordUserId) {
    return null;
  }

  const getStatusClass = () => {
    switch (status) {
      case 'online':
        return 'discord-status-online';
      case 'idle':
        return 'discord-status-idle';
      case 'dnd':
        return 'discord-status-dnd';
      default:
        return 'discord-status-offline';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'online':
        return 'online';
      case 'idle':
        return 'Afk';
      case 'dnd':
        return 'dnd';
      default:
        return 'offline';
    }
  };

  return (
    <div className="discord-status-container">
      <div 
        className={`discord-status-bubble ${getStatusClass()} ${loading ? 'discord-status-loading' : ''}`} 
        title={`Discord: ${status || 'offline'}`}
      ></div>
      <span className="discord-status-text">{getStatusText()}</span>
    </div>
  );
}

export default DiscordStatus;
